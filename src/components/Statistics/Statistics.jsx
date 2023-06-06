import PropTypes from 'prop-types'
import css from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className={css.stats}
                        key={id}>
                            <span>{label}</span>
                            <span>{percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,

}

export default Statistics;