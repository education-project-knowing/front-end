'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import SearchInput from '@/components/common/Monocles/SearchInput';
import StarsRating from '@/app/(after-login)/(quiz)/questions/_components/StarsRating';
import CustomPagination from '@/app/(after-login)/(quiz)/questions/_components/CustomPagination';
import Link from 'next/link';

interface Item {
  id: number;
  title: string;
}

export default function Page() {
  const searchParams = useSearchParams();
  const [items, setItems] = useState<Item[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const itemsPerPage = 10; // 페이지당 아이템 갯수

  const fetchItems = async (page: number) => {
    const pageParam = Number(searchParams.get('page')) || 1;
    try {
      const response = await fetch(`/api/questions?page=${pageParam}&limit=${itemsPerPage}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setItems(data);
      console.log(items);
      setTotalItems(data.totalItems);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };

  useEffect(() => {
    const page = Number(searchParams.get('page')) || 1;
    fetchItems(page);
  }, [searchParams]);

  return (
    <div className="flex flex-col">
      {/* search box */}
      <SearchInput />
      {/* TODO: 이부분 전역 상태로 저장했다가
      추후 검색버튼 누르면 쿼리 스트링에 삽입, 이러면 서버 사이드 랜더링도 안깨짐.  */}
      {/* filter */}
      <div className="mb-10 flex w-5/6 flex-col items-start justify-between gap-3 self-center justify-self-center text-nowrap rounded-md bg-white px-5 md:flex-row md:items-center">
        <p className="self-center md:self-start">필터</p>
        <div className="flex items-center">
          <Checkbox />
          <p className="ml-2">아는문제</p>
        </div>
        <div className="mr-12 flex items-center">
          <Checkbox />
          <p className="ml-2">모르는 문제</p>
        </div>
        <div className="flex items-center gap-3">
          <Checkbox />
          <StarsRating className="w-3" />
        </div>
        <div className="flex items-center gap-3">
          <Checkbox />
          <StarsRating
            className="w-3"
            rating={2}
          />
        </div>
        <div className="*: flex items-center gap-3">
          <Checkbox />
          <StarsRating
            className="w-3"
            rating={3}
          />
        </div>
      </div>
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
                href="/question-detail/1">
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
