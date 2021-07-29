import PropTypes from 'prop-types';
import s from './Statistical.module.css';

export default function Statistics({ title, stats }) {
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

function generateColor() {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return { backgroundColor: `${color}` };
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
