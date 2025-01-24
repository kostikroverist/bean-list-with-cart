import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Bean } from './../../interface/Bean';
import { getData, getDataById } from '../../service/service';


interface BeansState {
    beans: Bean[];
    beansId: Bean | null;
    status: "idle" | "loading" | "succeeded" | "failed"; // Статус запитів
    error: string | null; // Текст помилки, якщо є
}

const initialState: BeansState = {
    beans: [],
    beansId: null,
    status: "idle",
    error: null,
  };


  export const fetchBeans = createAsyncThunk("beans/fetchBeans", async () => {
    const data = await getData(); // Викликаємо твій `service`
    return data.items; // Повертаємо масив бобів
  });
  
  // Асинхронна дія для отримання одного бобу за ID
  export const fetchBeanById = createAsyncThunk(
    "beans/fetchBeanById",
    async (id: number) => {
      const data = await getDataById(id); // Викликаємо твій `service`
      return data; // Повертаємо об'єкт бобу
    }
  );

  const beansSlice = createSlice({
    name: "beans", // Назва стану
    initialState,
    reducers: {}, // У цьому прикладі немає синхронних дій
    extraReducers: (builder) => {
      // Обробка асинхронних дій
      builder
        .addCase(fetchBeans.pending, (state) => {
          state.status = "loading"; // Стан "завантаження"
        })
        .addCase(fetchBeans.fulfilled, (state, action: PayloadAction<Bean[]>) => {
          state.status = "succeeded"; // Завантаження успішне
          state.beans = action.payload; // Зберігаємо масив бобів
        })
        .addCase(fetchBeans.rejected, (state, action) => {
          state.status = "failed"; // Завантаження не вдалося
          state.error = action.error.message || "Failed to fetch beans";
        })
        .addCase(fetchBeanById.pending, (state) => {
          state.status = "loading"; // Стан "завантаження"
        })
        .addCase(fetchBeanById.fulfilled, (state, action: PayloadAction<Bean>) => {
          state.status = "succeeded"; // Завантаження успішне
          state.beansId = action.payload; // Зберігаємо об'єкт бобу
        })
        .addCase(fetchBeanById.rejected, (state, action) => {
          state.status = "failed"; // Завантаження не вдалося
          state.error = action.error.message || "Failed to fetch bean by ID";
        });
    },
  });
  
  export default beansSlice.reducer;