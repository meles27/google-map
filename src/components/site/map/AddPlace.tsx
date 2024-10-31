import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { addCulturalPlace, toggleAddPlace } from "../../../slices/cultureSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button, Dialog } from "@material-tailwind/react";
import { ErrorMessage } from "@hookform/error-message";

export default function AddPlace() {
  const dispatch = useDispatch();
  const culturalPlaces = useSelector((state: RootState) => state.culture);
  const handleOpen = () => dispatch(toggleAddPlace());
  const form = useForm();

  const handleSubmit = (data) => {
    console.log(data);
    dispatch(toggleAddPlace());
    dispatch(addCulturalPlace(data));
  };

  useEffect(() => {
    if (form.formState.errors) {
      console.log(form.formState.errors);
    }
  });
  return (
    <>
      <Dialog
        size="sm"
        open={culturalPlaces.place}
        handler={handleOpen}
        className=""
      >
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase overflow-auto max-h-[500px]">
            Add New Place
          </div>
          <form
            className="py-4 px-6"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Place name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                {...form.register("name", {
                  required: "Place Name is required",
                })}
              />
              <ErrorMessage
                errors={form.formState.errors}
                name="name"
                style={{ color: "red" }}
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="service"
              >
                Ethiopian Regions
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service"
                {...form.register("region", {
                  required: "Region is required",
                })}
              >
                <option value="">Select a Region</option>
                <option value="tigray">Tigray</option>
                <option value="amhara">Amhara</option>
                <option value="oromia">Oromia</option>
                <option value="somali">Somali</option>
                <option value="afar">Afar</option>
                <option value="benishangul-gumuz">Benishangul-Gumuz</option>
                <option value="gambela">Gambela</option>
                <option value="snnpr">
                  SNNPR (Southern Nations, Nationalities, and Peoples' Region)
                </option>
                <option value="dire-dawa">Dire Dawa</option>
                <option value="harari">Harari</option>
                <option value="addis-ababa">Addis Ababa</option>
                <option value="sidama">Sidama</option>
                <option value="south-west-ethiopia-peoples-region">
                  South West Ethiopia Peoples' Region
                </option>
              </select>
              <ErrorMessage
                errors={form.formState.errors}
                name="region"
                style={{ color: "red" }}
                render={({ message }) => <p>{message}</p>}
              />
            </div>
            <div className="flex">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  longitude
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="number"
                  {...form.register("longitude", {
                    required: "Email is required",
                  })}
                />
                <ErrorMessage
                  errors={form.formState.errors}
                  name="longitude"
                  style={{ color: "red" }}
                  render={({ message }) => <p>{message}</p>}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  latitude
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="number"
                  {...form.register("latitude", {
                    required: "Email is required",
                  })}
                />
                <ErrorMessage
                  errors={form.formState.errors}
                  name="latitude"
                  style={{ color: "red" }}
                  render={({ message }) => <p>{message}</p>}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="message"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={4}
                placeholder="Enter any additional information"
                defaultValue={""}
                {...form.register("description", {
                  required: "Description is required",
                })}
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <Button
                type="submit"
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              >
                Add Place
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
}
