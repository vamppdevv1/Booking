export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "User",
    flex: 1,
    minWidth: 200,
    renderCell: (params) => (
      <div className="cellWithImg">
        <img
          className="cellImg"
          src={
            params.row.img ||
            "https://imgs.search.brave.com/Yuv0bErfKVjKOPl1vuVRAWnuqfDHPz2GxBko_lXUbWE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDE5MTEwMS9vdXJt/aWQvcG5ndHJlZS1j/YXJ0b29uLWNvbG9y/LXNpbXBsZS1tYWxl/LWF2YXRhci1wbmct/aW1hZ2VfMTkzNDQ1/OS5qcGc"
          }
          alt="avatar"
        />
        {params.row.username}
      </div>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    minWidth: 220,
  },
  {
    field: "country",
    headerName: "Country",
    width: 90,
  },
  {
    field: "city",
    headerName: "City",
    width: 90,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 90,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 300,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 130,
  },
];