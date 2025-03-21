
export function getCurrentDate () {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
    
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-US', options);
      
      return formattedDate;
}
getCurrentDate();

