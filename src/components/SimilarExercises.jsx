import CardLoader from "./CardLoader"
import HorizontalScrollbar from "./HorizontalScrollbar"

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <section className="font-body">
      <div className="mt-0 md:mt-10">
        <h3 className="ml-10 text-3xl font-semibold dark:text-gray-100">
          More Exercises To Target The <span className="text-blue-700 capitalize dark:text-blue-500">Same Muscle</span>
        </h3>
        <div className="flex flex-row p-1 relative">
          {targetMuscleExercises.length ? (
            <HorizontalScrollbar data={targetMuscleExercises} isBodyParts={false} />
          ) : (
            <CardLoader quantity={3} />
          )}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="ml-10 text-3xl font-semibold dark:text-gray-100">
          Exercises With The Same <span className="text-blue-700 capitalize dark:text-blue-500">Equipment</span>
        </h3>
        <div className="flex flex-row p-1 relative">
          {targetMuscleExercises.length ? (
            <HorizontalScrollbar data={equipmentExercises} isBodyParts={false} />
          ) : (
            <CardLoader quantity={3} />
          )}
        </div>
      </div>
    </section>
  )
}

export default SimilarExercises
