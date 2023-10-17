"use client";
import usePagination from "@/hooks/usePagination";
import { api } from "@/lib/api";
import { apiClient } from "@/lib/catchfn";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ComplainsTable from "./complainsTable";
import { Complain } from "./types";

export default function UserComplains() {
  const { push } = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const { page, setPage } = usePagination();
  const [totalData, setTotalData] = useState(0);
  const [data, setData] = useState<Complain[]>([]);

  const getComplainsData = async () => {
    setLoading(true);
    const fdata = new FormData();
    fdata.append("page", `${page + 1}`);
    user?.id && fdata.append("id", user?.id);
    user?.type && fdata.append("type", user?.type);

    const { data } = await api.post(
      "/multiservice/publiccontrol/getComplain",
      fdata
    );
    setTotalData(data?.total);
    setData(data?.list);
    setLoading(false);
  };

  useEffect(() => {
    if (user) getComplainsData();
  }, [user, page]);

  useEffect(() => {
    if (!isAuthenticated) push("/");
  }, [isAuthenticated]);

  return (
    <div className="container mx-auto">
      <ComplainsTable
        data={data}
        page={page}
        setPage={setPage}
        total={totalData}
      />
    </div>
  );
}
