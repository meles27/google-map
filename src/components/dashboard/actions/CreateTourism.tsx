import { useForm } from "react-hook-form";
import { useCreateTourismsMutation } from "../../../services/tourismApi";
import { TourismEntityType } from "../../../types/entity_types";

const CreateTourism = () => {
  const { register, handleSubmit, reset } = useForm<TourismEntityType>();
  const [addTourism, { isLoading, isError, error, isSuccess }] =
    useCreateTourismsMutation();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("location", data.location);
      formData.append("category", data.category);
      if (data.image[0]) {
        formData.append("image", data.image[0]); // Handle file upload
      }

      await addTourism(formData);
      reset(); // Reset form on success
    } catch (err) {
      console.error("Failed to add tourism:", err);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Add Tourism Place</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: true })}
          placeholder="Name"
          className="border p-2 w-full"
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="Description"
          className="border p-2 w-full"
        />
        <input
          {...register("latitude", { required: true })}
          placeholder="Latitude"
          type="number"
          step="any"
          className="border p-2 w-full"
        />
        <input
          {...register("longitude", { required: true })}
          placeholder="Longitude"
          type="number"
          step="any"
          className="border p-2 w-full"
        />
        <input
          {...register("category", { required: true })}
          placeholder="Category"
          className="border p-2 w-full"
        />
        <input
          {...register("image")}
          type="file"
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded w-full"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {isError && (
        <p className="text-red-600 mt-2">
          Error: {error?.data?.message || "Something went wrong"}
        </p>
      )}
      {isSuccess && (
        <p className="text-green-600 mt-2">Tourism place added successfully!</p>
      )}
    </div>
  );
};

export default CreateTourism;
