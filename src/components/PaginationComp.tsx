import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComp() {
  return (
    <div className="w-full flex justify-center mt-5 items-center">
      <Stack spacing={2}>
        <Pagination count={10} shape="rounded" />
      </Stack>
    </div>
  );
}
