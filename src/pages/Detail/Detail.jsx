import { useParams, useNavigate } from "react-router-dom";
import { useBookById } from "../../hooks/useBooks";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = useBookById(id);

  return (
    <div className="">
      

    </div>
  );
}

export default DetailPage;