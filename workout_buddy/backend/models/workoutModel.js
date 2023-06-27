const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true })

// The first argument defines the schema for workoutSchema.
// The second argument is a timestamp.
// The 'timestamps' adds a property to the document that shows when doc was created
// The Schema only defines the structure of how a document will be created and exist in the DB.
// The Model applies the schema to a particular model. We then use this model to interact with a collection of that name.

module.exports = mongoose.model('Workout', workoutSchema)
// When exporting mongoose.model takes 2 args.
// The first defines the name of the collection that will follow the schema. (A collection is a table)
// This name will automatically become plural - in this case workout will become a collection called 'Workouts'
// The Schema as stated before will defines the strcuture of documents that will go into the 'Workouts' collection.

// The below is a clearer way of understanding how the schema/model relationship works
// Withot having to export a model.

// const Workout = mongoose.model('Workout', workoutSchema)

// const pushups = new Workout({ title: 'string', reps: 12, load: 10 })
// pushups.save()

// Workout.create({ title: 'A different workout', reps: 5, load: 2 })

// Workout.insertMany([{ title: 'A group on docs', reps: 5, load: 2 },
// { title: 'In an array', reps: 3, load: 2 }]) => Takes an array of documents to be inserted

// Workout.find()  // => similar to an all method.
// Workout.findOne()  // => similar to a find(id) method.
// Workout.deleteOne()  // => Deletes selected document
// Workout.updateOne()  // => Updates selected document

// Simplified: Schema defines structure of docs for collection - Model reads writes and creates documents for collection
