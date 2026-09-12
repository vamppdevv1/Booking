import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "./datatablesource.jsx";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import { useEffect, useState } from "react";
import axios from "axios";
export const DataTable = ({ columns }) => {
  //states
  const [list, setList] = useState([]);
  const location = useLocation()
  const path = location.pathname.split("/")[1]
  //fetch
  const { data } = useFetch(`http://localhost:8800/api/${path}`, {
    withCredentials: true,
  });
  useEffect(() => {
    setList(data);
  }, [data]);
  //handle funcs
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/${path}/${id}`, {
        withCredentials: true,
      });
      setList(list.filter((i) => i._id !== id));
    } catch (err) {}
  };
  //column config
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <div className="cellAction">
          <div
            className="deleteButton"
            onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </div>
        </div>
      ),
    },
  ];
  //func
  return (
    <div className="datatable">
      <div className="datatableTitle">
      {path}
        <Link
          to={`/${path}/new`}
          className="link"
        >
          Add new {path}
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};
