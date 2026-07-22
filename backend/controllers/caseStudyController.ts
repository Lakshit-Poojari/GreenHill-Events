import {
  createCaseStudiesService,
  deleteCaseStudiesService,
  getAllCaseStudiesService,
  getSingleCaseStudiesService,
  updateCaseStudiesService,
} from "../services/caseStudiesService";
import { CreateCaseStudy, UpdateCaseStudy } from "../types/caseStudies";

export async function createCaseStudiesController(caseStudies: CreateCaseStudy,) {
  try {
    const result = await createCaseStudiesService(caseStudies);
    return result;
  } catch (error) {
    console.error("Create case study controller", error);
    throw new Error();
  }
}

export async function updateCaseStudiesController( id: number, caseStudies: UpdateCaseStudy,) {
  try {
    const result = await updateCaseStudiesService(id, caseStudies);
    return result;
  } catch (error) {
    console.error("Create case study controller", error);
    throw new Error();
  }
}

export async function getAllCaseStudiesController() {
  try {
    const result = await getAllCaseStudiesService();
    return result;
  } catch (error) {
    console.error("Create case study controller", error);
    throw new Error();
  }
}

export async function getSingleCaseStudiesController(id: number) {
  try {
    const result = await getSingleCaseStudiesService(id);
    return result;
  } catch (error) {
    console.error("Create case study controller", error);
    throw new Error();
  }
}

export async function deleteCaseStudiesController(id: number) {
  try {
    const result = await deleteCaseStudiesService(id);
    return result;
  } catch (error) {
    console.error("Create case study controller", error);
    throw new Error();
  }
}
