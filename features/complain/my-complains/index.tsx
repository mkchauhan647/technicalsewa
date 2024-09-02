"use client";
import usePagination from "@/hooks/usePagination";
import { api } from "@/lib/api";
import { apiClient } from "@/lib/catchfn";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ComplainsTable from "./complainsTable";
import { Complain } from "./types";
import ComplainsFilter from "./complainsFilter";

export default function UserComplains() {
  const { push } = useRouter();
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const { page, setPage } = usePagination();
  const [totalData, setTotalData] = useState(0);
  const [data, setData] = useState<Complain[]>([]);
  const [searchQuery, setSearchQuery] = useState<any>({});

  useEffect(() => setPage(0), []);

  const getComplainsData = async () => {
    setLoading(true);
    const fdata = new FormData();
    fdata.append("page", `${page + 1}`);
    user?.id && fdata.append("id", user?.id);
    user?.type && fdata.append("type", user?.type);
    for (const key of Object.keys(searchQuery)) {
      searchQuery[key] && fdata.append(key, searchQuery[key]);
    }

    const { data } = await api.post(
      "/techsewa/publiccontrol/getComplain",
      fdata
    );
    setTotalData(data?.total);
    setData(data?.list);
    // console.log("data", data);
    setLoading(false);
  };

  useEffect(() => {
    if (user) getComplainsData();
  }, [user, page, searchQuery]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) push("/");
  }, [isAuthenticated, isLoading]);

  return (
    <div className="container mx-auto">
      <ComplainsFilter
        onSearch={setSearchQuery}
        onReset={() => setSearchQuery({})}
      />
      <ComplainsTable
        loading={loading}
        data={data}
        page={page}
        setPage={setPage}
        total={totalData}
      />
    </div>
  );
}
