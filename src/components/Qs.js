import {useNavigate} from "react-router-dom"

const navigate = useNavigate();


export default function qs() {
    function contentClickHandler(e) {
        e.target.closest('a');
        if (e.target.search.startsWith("?q=")) {
          e.preventDefault();
          let query = e.target.search.split("?q=")[1];
          query = query.replaceAll("+", "-");
          query = "baslik/" + query;
           // this.props.history.push(e.target.href)
           navigate("/"+query);
            }
      };
      contentClickHandler()
    };

