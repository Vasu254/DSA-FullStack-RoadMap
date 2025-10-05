import { useState } from 'react';
import YearSelector from '../YearSelector';

export default function YearSelectorExample() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  
  return (
    <YearSelector 
      selectedYear={selectedYear}
      onSelectYear={(year) => {
        setSelectedYear(year);
        console.log('Year selected:', year);
      }}
    />
  );
}
