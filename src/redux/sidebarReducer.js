const initialState = {
  friends: [
    {
      id: 1,
      name: "tolik",
      avatar:
        "https://cdn.dribbble.com/users/3495607/screenshots/11107116/media/b23d903d58e0c7524361a9187fb05cc8.png?compress=1&resize=400x300&vertical=top",
    },
    {
      id: 2,
      name: "vitya",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNWApit9dm9cWrkxcYigd4yEDAPcl_tI_jeAJfIR1VD1oeOZnx9Z-1lIGIlveVjqkRLM&usqp=CAU",
    },
    {
      id: 3,
      name: "serega",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSXoQ7k_QLkdffGrNKlq1CMQ_ATpb5wK8OrnkhQCNnm8G7CY_lP6GSEoPZm-n8XXtrkQ&usqp=CAU",
    },
    {
      id: 4,
      name: "vlad",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzYPa1QLm9ByNwLVa7hwNNN_OzpUAy0THLw&usqp=CAU",
    },
    {
      id: 5,
      name: "danya",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKwbs5s5pgs9F4GVeyzlqzlHSrWxrtPMo6w&usqp=CAU",
    },
  ],
};
const sidebarReducer = (state = initialState, action) => {
  return state;
};
export default sidebarReducer;
