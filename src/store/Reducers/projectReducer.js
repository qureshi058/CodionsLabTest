import { createSlice } from "@reduxjs/toolkit";
const initial_state = {
  popularLoading: false,
  trendingLoading: false,
  popularByCategoryLoading: false,
  trendingItems: [],
  popularItems: [],
  allTasks: [],
  items: [],
  projects: [],
  currentPage: 1,
  lastPage: 0,
  totalItemsCount: 0,
  perPageCount: 0,
  categories: [],
  subCategories: [],
  categoriesItems: [],
  selectedCategory: null,
  width: 0,
  updateProject: false,
  addTaskModal: false,
  updateTask:false,
  projectDetail:null,
  taskDetail:null
};

const projectSlice = createSlice({
  name: "Project",
  initialState: initial_state,
  reducers: {
    updateProject: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { updateProject } = projectSlice.actions;
export default projectSlice.reducer;
