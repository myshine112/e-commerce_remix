import { Checkbox } from "antd";
import moment from "moment";
import { getColumnSearchProps } from "~/components/shared/table-search/TableSearch";

export const vendorColumns = (
  searchText: any,
  searchInput: any,
  searchedColumn: any,
  setSearchText: any,
  setSearchedColumn: any,
  filterVendors: any
) => {
  return [
    {
      title: "Vendor Name",
      dataIndex: "name",
      key: "name",
      render: (_: any, record: any) => {
        return <p>{record?.name ? record?.name : ""}</p>;
      },
      label: <Checkbox value="name">Vendor Name</Checkbox>,
      ...getColumnSearchProps(
        "name",
        searchText,
        searchInput,
        searchedColumn,
        setSearchText,
        setSearchedColumn,
        filterVendors
      ),
      sorter: true,
    },
    {
      ...getColumnSearchProps(
        "email",
        searchText,
        searchInput,
        searchedColumn,
        setSearchText,
        setSearchedColumn,
        filterVendors
      ),
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_: any, record: any) => {
        return <p>{record?.owner?.email ? record?.owner?.email : ""}</p>;
      },
      label: <Checkbox value="email">Email</Checkbox>,
    },

    {
      ...getColumnSearchProps(
        "phone",
        searchText,
        searchInput,
        searchedColumn,
        setSearchText,
        setSearchedColumn,
        filterVendors
      ),
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (_: any, record: any) => {
        return <p>{record?.owner?.phone ? record?.owner?.phone : ""}</p>;
      },
      label: <Checkbox value="phone">Phone</Checkbox>,
    },
    {
      title: "Arabic Name",
      dataIndex: "name_ar",
      key: "name_ar",
      render: (_: any, record: any) => {
        return <p>{record?.name_ar ? record?.name_ar : ""}</p>;
      },
      label: <Checkbox value="name_ar">Arabic Name</Checkbox>,
      ...getColumnSearchProps(
        "name_ar",
        searchText,
        searchInput,
        searchedColumn,
        setSearchText,
        setSearchedColumn,
        filterVendors
      ),
      sorter: true,
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
      render: (_: any, record: any) => {
        return <p>{record?.slug ? record?.slug : ""}</p>;
      },
      label: <Checkbox value="slug">Slug</Checkbox>,
      ...getColumnSearchProps(
        "slug",
        searchText,
        searchInput,
        searchedColumn,
        setSearchText,
        setSearchedColumn,
        filterVendors
      ),
      sorter: true,
    },

    {
      title: "Store",
      dataIndex: "slug",
      key: "slug",
      render: (_: any, record: any) => {
        return (
          <a
            target="_blank"
            href={`https://anyaa.io/${record?.slug}`}
            rel="noreferrer"
          >
            Go to store
          </a>
        );
      },
      label: <Checkbox value="slug">Slug</Checkbox>,

      sorter: true,
    },
    {
      /*     ...getColumnSearchProps(
        "createdAt",
        searchText,
        searchInput,
        searchedColumn,
        setSearchText,
        setSearchedColumn,
        filterVendors
      ), */
      title: "Created At",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (d: any, record: any) =>
        moment(record.createdAt).format("DD-MM-YYYY HH:mm a"),
      label: <Checkbox value="createdAt">createdAt</Checkbox>,
      sorter: true,
    },
  ];
};
