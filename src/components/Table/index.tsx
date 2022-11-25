import { useMemo } from 'react';
import { mockup } from '../../utils/mockup';
import styles from './styles.module.css';

interface ITable {
  startDate: string
  endDate: string
}

export const Table: React.FC<ITable> = ({ startDate, endDate }) => {
  const list = useMemo(() => {
    if (startDate && !endDate) {
      return mockup.filter(item => `${item.date.year}-${item.date.month}-${item.date.day}` === startDate).map(item => item)
    } else if (startDate && endDate) {
      return mockup.filter(item => `${item.date.year}-${item.date.month}-${item.date.day}` >= startDate && `${item.date.year}-${item.date.month}-${item.date.day}` <= endDate).map(item => item)
    }

    return mockup.map(item => item);
  }, [startDate, endDate]);

  return (
    <table className={styles['table-container']}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Data</th>
          <th>Vendedor</th>
          <th>Visitas</th>
          <th>Vendas</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className={styles['tctb-container']}>
        {list?.map((item, index) => (
          <tr key={index}>
            <td>{item._id}</td>
            <td>{item.date.day}/{item.date.month}/{item.date.year}</td>
            <td>{item.seller}</td>
            <td>{item.visits}</td>
            <td>{item.sales}</td>
            <td>{item.visits + item.sales}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
