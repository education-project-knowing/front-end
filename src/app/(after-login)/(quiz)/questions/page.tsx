import { useSearchParams } from 'next/navigation';
import { cache, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import SearchInput from '@/components/common/Monocles/SearchInput';
import StarsRating from '@/app/(after-login)/(quiz)/questions/_components/StarsRating';
import CustomPagination from '@/app/(after-login)/(quiz)/questions/_components/CustomPagination';
import Link from 'next/link';
import Filter from '@/app/(after-login)/(quiz)/questions/_components/Filter';

interface Item {
  id: number;
  title: string;
  totalItems: number;
}

export interface FormInput {
  inputField: string;
  account: string;
  role: string;
  [key: string]: any;
}

export default async function Page({ searchParams }: { searchParams: string }) {
  const itemsPerPage = 10; // 페이지당 아이템 갯수
  console.log('빵에에요! 퀘스천 디테일이에요!');
  const fetchItems = async (page: any): Promise<Item[]> => {
    try {
      const response = await fetch(`http://localhost:3000/api/questions?page=${page}&limit=${itemsPerPage}`, {
        next: { revalidate: 3 },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Item[] = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch items:', error);
      throw error;
    }
  };
  const pageNumber = Number.isInteger(Number(searchParams)) ? Number(searchParams) : 1;
  const items = await fetchItems(pageNumber);
  const totalItems = items.length;

  return (
    <div className="flex flex-col">
      {/* contents */}
      {items && items.length > 0 ? (
        <ul className="space-y-4">
          {items.map(item => (
            <li
              className="flex items-center justify-between rounded-lg bg-[#ded29a] pl-3"
              key={item.id}>
              <Checkbox />
              <Link
                className="grow pl-4 text-lg"
                href={`/question-detail/${item.id}`}>
                <h3>{item.title}</h3>
              </Link>
              <div className="rounded-r-lg bg-[#738660] p-3">
                <StarsRating rating={1} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items to display</p>
      )}
      <CustomPagination></CustomPagination>
    </div>
  );
}
