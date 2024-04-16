import "./card.css";
import PropTypes from "prop-types";
import { Bar } from "../../../../constants/svg";
export function Card({ data: { title, amount } }) {
  return (
    <li className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{amount} ta</p>
      <div className="flex justify-end">
        <Bar />
      </div>
    </li>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }),
};
