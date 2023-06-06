import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'
import TransactionItems from 'components/TransactionItems/TransactionItems';

const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <TransactionItems key={item.id} {...item} />
                    )
                )}
            </tbody>
        </table>
    )
};

export default TransactionHistory;