import { useEffect, useState, useRef } from "react";
import { GetVendorViewAction } from "~/redux/app/actions/vendor_view";
import { useAppDispatch, useAppSelector } from "~/hooks/Store";
import { Table, Row } from "antd";
import type { InputRef } from "antd";
import { data as StateData, loading as StateLoading } from "~/redux/app";
import { VendorTableWrapper } from "../styles";
import ProductFilter from "~/components/shared/filter-columns";
import { vendorColumns } from "./VendorList.utils";

export default function Index() {
  const [filteredColumn, setFilteredColumn] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);
  const [searchConfig, setSearchConfig] = useState<any>({
    filter: {},
    sortOrder: { direction: "desc", field: "createdAt" },
  });

  const dispatch = useAppDispatch();
  const data = useAppSelector(StateData);
  const { list, totalCount } = data;
  const loading = useAppSelector(StateLoading);

  const filterVendors = (filter: any) => {
    setSearchConfig({
      ...searchConfig,
      filter,
    });
  };

  console.log("trigger deployment");

  useEffect(() => {
    //save current page and pagesize in store and pass it here
    if (!searchText && !searchedColumn)
      dispatch(
        GetVendorViewAction(1, 10, searchConfig.filter, searchConfig.sortOrder)
      );
  }, [dispatch]);

  const [tableColumns, setTableColumns] = useState<any>(
    vendorColumns(
      searchText,
      searchInput,
      searchedColumn,
      setSearchText,
      setSearchedColumn,
      filterVendors
    )
  );

  return (
    <VendorTableWrapper>
      <h2 className="text-3xl">Vendors # {totalCount}</h2>
      <Row gutter={24} className="flex items-baseline justify-between">
        <ProductFilter
          tableColumns={tableColumns}
          setTableColumns={setTableColumns}
          filteredColumn={filteredColumn}
          setFilteredColumn={setFilteredColumn}
        />
      </Row>

      <div className="flex flex-col items-end justify-center">
        <Table
          columns={filteredColumn.length > 0 ? filteredColumn : tableColumns}
          dataSource={list}
          loading={loading}
          size="middle"
          onChange={(pagination, filters, sorter: any) => {
            const filter: any = {};
            Object.keys(filters).forEach((item) => {
              if (filters[item] && filters[item]!.length > 0) {
                filter[item] = filters[item]![0];
              }
            });

            dispatch(
              GetVendorViewAction(
                pagination.current!,
                pagination.pageSize!,
                filter,
                {
                  direction:
                    sorter?.order == "ascend"
                      ? sorter?.order?.substring(0, 3)
                      : "desc",
                  field: sorter?.columnKey ? sorter?.columnKey : "createdAt",
                }
              )
            );
          }}
          pagination={{
            defaultCurrent: 1,
            total: totalCount,
            pageSize: 10,
            showTotal(total) {
              return <p>Total {total} items</p>;
            },
          }}
        />
      </div>
    </VendorTableWrapper>
  );
}
