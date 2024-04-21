import "./groupcard.css";
import img from '../../../../assets/images/img.png';
export function GroupCard({ data, stylex = "" }) {
  return (
    <li className={`group-card ${stylex}`}>
      <span className="group-card-header">Matematika</span>
      <div className="colify gap-8 p-3">
        <div className="flex gap-3">
          <img
            className="rounded-full object-cover"
            src={img}
            alt=""
            width={80}
            height={80}
          />
          <ul className="colify gap-3">
            <li className="flex justify-between items-start gap-3">
              <strong className="group-card-text">O’qituvchi:</strong>
              <p className="group-card-desc">Muxamadaliyev Ibrohim</p>
            </li>
            <li className="justify gap-3">
              <strong className="group-card-text whitespace-nowrap">
                Tel raqam:
              </strong>
              <p className="group-card-desc">+998900113861</p>
            </li>
          </ul>
        </div>
        <ul className="colify gap-3">
          <li className="justify">
            <strong className="group-card-text">Dars kunlari:</strong>
            <p className="group-card-desc">DU-CHOR-JUMA</p>
          </li>
          <li className="justify">
            <strong className="group-card-text">Dars vaqti:</strong>
            <p className="group-card-desc">14:00-16:00</p>
          </li>
          <li className="justify">
            <strong className="group-card-text">Dars vaqti:</strong>
            <p className="group-card-desc">25ta</p>
          </li>
        </ul>
      </div>
    </li>
  );
}
