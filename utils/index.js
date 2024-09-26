export async function fetchCars(query ='') {
  const limit =8;
    const headers = {
      'x-rapidapi-key': '86fb9679bamsh4ff12befde65f6dp18e22bjsn7beb1bff061e',
      'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    };
  
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars${query ? `?${query}` : '?model=corolla'}&limit=${limit}`;
    const response = await fetch(`${url}`, {
      headers: headers,
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }
  
    const result = await response.json();
    return result;
  }
  
  export function estimateRentPerDay(car) {
    const baseRate = 30; 
    const mpgFactor = 0.5; 
    const ageFactor = 0.2; 
  
    const age = new Date().getFullYear() - car.year; 
    const estimatedRent = baseRate + (baseRate * (car.city_mpg / 30) * mpgFactor) - (age * ageFactor);
  
    return Math.max(0, estimatedRent).toFixed(2); 
  }
  
  export async function fetchAndEstimateCarsRent(query = '') {
    const cars = await fetchCars(query);
    return cars.map(car => ({
      ...car,
      estimatedRent: estimateRentPerDay(car) 
    }));
  }
  