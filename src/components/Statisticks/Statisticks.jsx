import s from '../Statisticks/Statisticks.module.css'
import PropTypes from 'prop-types'
function Statisticks({title, stats}) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({id, label, percentage}) => (
            <li key={id} className={s.item} >
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
            </li>
        ))}
      </ul>
    </section>
  );
}

Statisticks.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  }))

}

export default Statisticks
