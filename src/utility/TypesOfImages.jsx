import Swal from "sweetalert2";

export const TypeOfImage = ["png", "jpg", "jpeg", "jfif", "jpeg"];
export const UplodeFileType = ["pdf"];
export const PRODUCT_TYPES = [
  "furniture",
  "desk",
  "electronics",
  "laptop",
  "projector",
  "officesupplies",
  "printer",
  "stationery",
  "ac",
];
export const showSuccessMessage = (message) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const showDeleteMessage = (message) => {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {


        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: message,
          icon: "success",
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
        });
      }
    });
};

export const getRoleColor = (role) => {
  switch (role) {
    case "ADMIN":
      return "bg-red-100 text-red-800";
    case "EMPLOYEE":
      return "bg-blue-100 text-blue-800";
    case "USER":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
