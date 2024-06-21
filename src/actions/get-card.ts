'use server'

export const getCard = async(id:string) => {
    const response = await fetch(
        `http://localhost:3000/card/list/${id}`,
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