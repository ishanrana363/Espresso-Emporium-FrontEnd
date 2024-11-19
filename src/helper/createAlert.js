import Swal from "sweetalert2";

export  const createAlert = async function () {
    return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to upload this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Upload it!"
    })
}


    // .then((result) => {
    //     if (result.isConfirmed) {
    //         Swal.fire({
    //             title: "Deleted!",
    //             text: "Your file has been deleted.",
    //             icon: "success"
    //         });
    //     }
    // });