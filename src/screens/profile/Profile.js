import { connect, useDispatch, useSelector } from "react-redux";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { Form } from "../../components/form/Form";
import { selectName, selectShowName } from "../../store/profile/selectors";

export const Profile = () => {

 const dispatch = useDispatch();
 const name = useSelector(selectName);
  const showName = useSelector(selectShowName);

  const handleClick = () => {
    dispatch(toggleCheckbox);
  };

  const handleSubmit = (text) => {
    dispatch(setName(text));
  };


  return (
    <>
      <h3>This is Profile</h3>
      {showName && <span>{name}</span>}
      <input type="checkbox" id="scales" onClick={handleClick}/>
      <Form onSubmit={handleSubmit} />
    </>
  );
};