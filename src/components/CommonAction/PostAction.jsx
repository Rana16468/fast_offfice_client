import ErrorPage from "../../shared/Error/ErrorPage";

const PostAction = async(url, selectedSpecialties) => {

  try{
    const result= await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(selectedSpecialties),
    });
    const data=await result.json();
    return data;
  }
  catch(error){
    if(error){
      return <ErrorPage/>
    }
  }
};

export default PostAction;