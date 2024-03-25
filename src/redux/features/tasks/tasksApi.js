import baseApi from "../api/baseApi";


const tasksApi = baseApi.injectEndpoints({
    endpoints: (builder) => (
        {
            getTasks: builder.query({
                query: () => '/tasks',
                providesTags: ['tasks']
            }),
            updateTask: builder.mutation({
                query: ({ id, status }) => ({
                    url: `/tasks/${id}`,
                    method: 'PATCH',
                    body: { status },
                }),
                invalidatesTags: ['tasks']
            }),
            addtask: builder.mutation({
                query: (task) => ({
                    url: '/tasks',
                    method: 'POST',
                    body: task
                }),
                invalidatesTags: ['tasks']
            })
        }
    )
});

export const {useAddtaskMutation,useGetTasksQuery,useUpdateTaskMutation} = tasksApi ;