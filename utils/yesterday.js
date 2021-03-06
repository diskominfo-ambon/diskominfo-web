
export default function yesterday(limit) {
  const now = new Date();
  const state = [];


  for (let i = now.getDate(); i >= now.getDate() - limit; i--) {
    const date = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        i
    );

    let result = null;

    switch(i) {
      case now.getDate():
        result = {
          date,
          label: 'Hari ini',
        };

        break;
      case now.getDate() - 1:
        result = {
          date,
          label: 'Kemarin',
        };

        break;
      default:
        const label = new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium'})
          .format(date)
          .split(' ')
          .slice(0, 2)
          .join(' ');

        result = {
          label,
          date
        };

        break;

    }


      state.push(result);
  }


  return state;
}