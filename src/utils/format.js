import dayjs from 'dayjs';

const formatTime = ({ time }) => {
  if (!time) {
    return '';
  }
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss');
};

export { formatTime };
