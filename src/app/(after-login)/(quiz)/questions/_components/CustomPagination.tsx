'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
interface IPaginationContent {
  totalItems?: number;
  itemsPerPage?: number;
  totalPages?: number;
  pagesPerGroup?: number;
}

export default function CustomPagination({
  totalItems = 100,
  itemsPerPage = 10,
  totalPages = 10,
  pagesPerGroup = 5,
}: IPaginationContent) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);
  const [currentGroup, setCurrentGroup] = useState(Math.ceil(currentPage / pagesPerGroup));
  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`);
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    let items = [];
    const startPage = (currentGroup - 1) * pagesPerGroup + 1;
    const endPage = Math.min(currentGroup * pagesPerGroup, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href={`?page=${i}`}
            isActive={currentPage === i}
            onClick={e => {
              e.preventDefault();
              handlePageChange(i);
            }}
            className="h-fit w-fit">
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return items;
  };

  const handleNextGroup = () => {
    if (currentGroup * pagesPerGroup < totalPages) {
      const newPage = currentGroup * pagesPerGroup + 1;
      setCurrentGroup(currentGroup + 1);
      handlePageChange(newPage);
    }
  };

  const handlePreviousGroup = () => {
    if (currentGroup > 1) {
      const newPage = (currentGroup - 2) * pagesPerGroup + 1;
      setCurrentGroup(currentGroup - 1);
      handlePageChange(newPage);
    }
  };

  const handleNextEnd = () => {
    if (currentPage < totalPages) {
      setCurrentGroup(Math.ceil(totalPages / pagesPerGroup));
      handlePageChange(totalPages);
    }
  };

  const handlePreviousStart = () => {
    if (currentPage > 1) {
      setCurrentGroup(1);
      handlePageChange(1);
    }
  };

  // Calculate item indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious
          href="#"
          onClick={e => {
            e.preventDefault();
            handlePreviousStart();
          }}
        />
        <PaginationPrevious
          href="#"
          onClick={e => {
            e.preventDefault();
            handlePreviousGroup();
          }}
        />

        <div className="flex flex-row gap-3">{renderPaginationItems()}</div>

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={e => {
              e.preventDefault();
              handleNextGroup();
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={e => {
              e.preventDefault();
              handleNextEnd();
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
