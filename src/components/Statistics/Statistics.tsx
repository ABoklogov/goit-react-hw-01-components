// import PropTypes from 'prop-types';
import s from './Statistical.module.css';
import generateColor from '../../helpers/generateColor';

interface IStats {
  id: string;
  label: string;
  percentage: number;
  stats: IStats[];
};

export default function Statistics({ title, stats }: IProps) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(el => (
          <li key={el.id} className={s.item} style={generateColor()}>
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };
