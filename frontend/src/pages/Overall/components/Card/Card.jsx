import { Bar } from "../../../../constants/svg";
import "./card.css";
import PropTypes from "prop-types";
export function Card({ data }) {
  return (
    <li className="card">
      <h3 className="card-title">{data.title}</h3>
      <p className="card-desc">{data.amount} ta</p>
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
