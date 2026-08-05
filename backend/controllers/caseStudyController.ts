import {
  createCaseStudiesService,
  deleteCaseStudiesService,
  getAllCaseStudiesService,
  getBlogCaseStudiesService,
  getCaseStudyBySlugService,
  getCaseStudyService,
  getHomeCaseStudiesService,
  getSingleCaseStudiesService,
  updateCaseStudiesService,
} from "../services/caseStudiesService";
import { CreateCaseStudy, UpdateCaseStudy } from "../types/caseStudies";

export async function createCaseStudiesController(
  caseStudies: CreateCaseStudy,
) {
  try {
    const result = await createCaseStudiesService(caseStudies);
    return result;
  } catch (error) {
    console.error("Create case study controller", error);
    throw new Error();
  }
}

export async function updateCaseStudiesController(
  id: number,
  caseStudies: UpdateCaseStudy,
) {
  try {
    const result = await updateCaseStudiesService(id, caseStudies);
    return result;
  } catch (error) {
    console.error("Update case study controller", error);
    throw new Error();
  }
}

export async function getAllCaseStudiesController() {
  try {
    const result = await getAllCaseStudiesService();
    return result;
  } catch (error) {
    console.error("Get all case study controller", error);
    throw new Error();
  }
}

export async function getSingleCaseStudiesController(id: number) {
  try {
    const result = await getSingleCaseStudiesService(id);
    return result;
  } catch (error) {
    console.error("Get single case study controller", error);
    throw new Error();
  }
}

export async function deleteCaseStudiesController(id: number) {
  try {
    const result = await deleteCaseStudiesService(id);
    return result;
  } catch (error) {
    console.error("Delete case study controller", error);
    throw new Error();
  }
}

export async function getCaseStudiesbySlugController(slug: string) {
  try {
    const result = await getCaseStudyBySlugService(slug);
    return result;
  } catch (error) {
    console.error("Delete case study controller", error);
    throw new Error();
  }
}

export async function getBlogCaseStudiesController() {
  try {
    const caseStudies = await getBlogCaseStudiesService();

    return {
      success: true,
      caseStudies,
    };
  } catch (error) {
    console.error("Get home case studies controller error", error);
    throw error;
  }
}

export async function getCaseStudyController() {
  try {
    const caseStudies = await getCaseStudyService();

    return {
      success: true,
      caseStudies,
    };
  } catch (error) {
    console.error("Get home case studies controller error", error);
    throw error;
  }
}

export async function getHomeCaseStudiesController() {
  try {
    const caseStudies = await getHomeCaseStudiesService();

    return {
      success: true,
      caseStudies,
    };
  } catch (error) {
    console.error("Get home case studies controller error", error);
    throw error;
  }
}
