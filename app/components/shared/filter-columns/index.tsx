// import React, { useState } from "react";
import { Dropdown, Menu, Row, Col } from "antd";
import { FilterFilled } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
// const mockVal = (str: string, repeat = 1) => ({
//   value: str.repeat(repeat),
// });

const App = (props: any) => {
  let { t } = useTranslation();
  // const [value, setValue] = useState("");
  // const [options, setOptions] = useState<{ value: string }[]>([]);

  // const onSearch = (searchText: string) => {
  //   setOptions(
  //     !searchText
  //       ? []
  //       : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
  //   );
  // };

  // const onSelect = (data: string) => {
  //   console.log("onSelect", data);
  // };

  // const onChange = (data: string) => {
  //   setValue(data);
  // };

  return (
    <>
      <Col className="flex items-center" style={{ display: "flex" }}>
        <Dropdown
          className="filter"
          overlay={
            <Menu
              items={props.tableColumns}
              onChange={(e: any) => {
                if (e.target.checked) {
                  props.setFilteredColumn([
                    ...props.filteredColumn,
                    ...props.tableColumns.filter(
                      (item: any) => item.key === e.target.value
                    ),
                  ]);
                } else {
                  props.setFilteredColumn(
                    props.filteredColumn.filter(
                      (item: any) => item.key !== e.target.value
                    )
                  );
                }
              }}
            />
          }
        >
          <div style={{ cursor: "pointer" }}>
            {t("filterBy")}
            <FilterFilled />
          </div>
        </Dropdown>
      </Col>
      {/* <Col span={19} sm={19} xs={24}>
        <AutoComplete
          value={value}
          options={options}
          style={{ width: "100%" }}
          onSelect={onSelect}
          onSearch={onSearch}
          onChange={onChange}
          placeholder="Search"
        />
      </Col> */}
    </>
  );
};

export default App;
