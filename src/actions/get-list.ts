'use server'

export const getList = async(id:string) => {
    const response = await fetch(
        `http://localhost:3000/api/list/workspace/${id}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          return data;
        })
        .catch((error) => {
          console.error(error);
        });

    return response
}