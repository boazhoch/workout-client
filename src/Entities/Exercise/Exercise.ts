import EntityWithId from "../EntityWithId/EntityWithId";

interface IBodyParts {
  muscles: IMuscle[];
}

interface IMuscle extends IMediaArray {
  name: string;
  id: string;
  image: IMedia;
}

enum EXERCISE_EXPERIENCE {
  "BEGINNER",
  "NOVICE",
  "INTERMEDIATE",
  "EXPERT"
}

enum EXERCISE_TYPE {
  "STRENGTH"
}

enum EXERCISE_EQUIPMENT {
  "BODYWEIGHT",
  "DUMBBELLS",
  "CABLE",
  "BAND"
}

enum EXERCISE_FORCE_TYPE {
  "PUSH",
  "PULL"
}

export interface IExplanationMedia {
  explanation?: {
    video?: IMedia;
    image?: IMedia;
    desc?: string;
  };
}

export interface IExercise extends IExplanationMedia, IBodyParts {
  name: string;
  desc: string;
  muscles: IMuscle[];
  experience: EXERCISE_EXPERIENCE;
  type: EXERCISE_TYPE;
  equipment: EXERCISE_EQUIPMENT;
  forceType: EXERCISE_FORCE_TYPE;
}

interface IMediaArray {
  media: IMedia[];
}

interface IMedia {
  src: string;
  id: string;
  desc: string;
  mime_type: string;
}

class Exercise extends EntityWithId {
  public title: string;
  public name: string;
  public description: string;
  public muscles: IMuscle[];
  public experience: EXERCISE_EXPERIENCE;
  public type: EXERCISE_TYPE;
  public equipment: EXERCISE_EQUIPMENT;
  public forceType: EXERCISE_FORCE_TYPE;
}

export default Exercise;
