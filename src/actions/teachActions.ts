import { ActionObject } from '../types'
import { UserInput, TrainExtractorStep, ExtractResponse, UIExtractResponse, UIScoreResponse, TrainScorerStep, TeachResponse } from 'blis-models'

export const runExtractor = (key: string, appId: string, teachId: string, userInput: UserInput) : ActionObject => { 
    return {
        type: 'RUN_EXTRACTOR',
        key: key,
        appId: appId,
        teachId: teachId,
        userInput: userInput
    }
}

export const runExtractorFulfilled = (key: string, appId: string, teachId: string, uiExtractResponse: UIExtractResponse) : ActionObject => { 
    return {
        type: 'RUN_EXTRACTOR_FULFILLED',
        key: key,
        appId: appId,
        teachId: teachId,
        uiExtractResponse: uiExtractResponse
    }
}

export const postExtractorFeedback = (key: string, appId: string, teachId: string, trainExtractorStep: TrainExtractorStep) : ActionObject => { 
    return {
        type: 'POST_EXTACT_FEEDBACK',
        key: key,
        appId: appId,
        teachId: teachId,
        trainExtractorStep: trainExtractorStep
    }
}

export const postExtractorFeedbackFulfilled = (key: string, appId: string, teachId: string, teachResponse: TeachResponse) : ActionObject => { 
    return {
        type: 'POST_EXTACT_FEEDBACK_FULFILLED',
        key: key,
        appId: appId,
        teachId: teachId,
        teachResponse: teachResponse
    }
}

export const runScorer = (key: string, appId: string, teachId: string, extractResponse: ExtractResponse) : ActionObject => { 
    return {
        type: 'RUN_SCORER',
        key: key,
        appId: appId,
        teachId: teachId,
        extractResponse: extractResponse
    }
}

export const runScorerFulfilled = (key: string, appId: string, teachId: string, uiScoreResponse: UIScoreResponse) : ActionObject => { 
    return {
        type: 'RUN_SCORER_FULFILLED',
        key: key,
        appId: appId,
        teachId: teachId,
        uiScoreResponse: uiScoreResponse
    }
}

export const postScorerFeedback = (key: string, appId: string, teachId: string, trainScorerStep: TrainScorerStep) : ActionObject => { 
    return {
        type: 'POST_SCORE_FEEDBACK',
        key: key,
        appId: appId,
        teachId: teachId,
        trainScorerStep: trainScorerStep
    }
}

export const postScorerFeedbackFulfilled = (key: string, appId: string, teachId: string, teachResponse: TeachResponse) : ActionObject => { 
    return {
        type: 'POST_SCORE_FEEDBACK_FULFILLED',
        key: key,
        appId: appId,
        teachId: teachId,
        teachResponse: teachResponse
    }
}