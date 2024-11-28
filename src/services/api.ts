import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5003'
});

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Erreur de connexion:', error);
    throw new Error('Erreur de connexion');
  }
};
export const addWorkout = (workoutData: any) => api.post('/workouts', workoutData);
export const addNutrition = (nutritionData: any) => api.post('/nutrition', nutritionData);

// Export other API functions as needed
export {};
