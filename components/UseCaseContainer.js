import React, { useRef } from 'react';
import UseCases from './UseCases';
import UseCase1 from './UseCase1';
import UseCase2 from './UseCase2';
import UseCase3 from './UseCase3';
import UseCase4 from './UseCase4';
import UseCase5 from './UseCase5';
import UseCase6 from './UseCase6';

const UseCasesContainer = () => {
    const useCaseRefs = {
        useCase1Ref: useRef(null),
        useCase2Ref: useRef(null),
        useCase3Ref: useRef(null),
        useCase4Ref: useRef(null),
        useCase5Ref: useRef(null),
        useCase6Ref: useRef(null),
    };

    const handleLearnMoreClick = (key) => {
        console.log("Learn More clicked for:", key);
        const ref = useCaseRefs[key];
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("Reference is null, cannot scroll");
        }
    };
    const testHandleLearnMoreClick = () => {
        console.log("Test function called for useCase3");
            useCaseRefs.useCase3Ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id="UseCases">
	    <UseCases onLearnMoreClick={handleLearnMoreClick} />
            <UseCase1 ref={useCaseRefs.useCase1Ref} />
            <UseCase2 ref={useCaseRefs.useCase2Ref} />
            <UseCase3 ref={useCaseRefs.useCase3Ref} />
            <UseCase4 ref={useCaseRefs.useCase4Ref} />
            <UseCase5 ref={useCaseRefs.useCase5Ref} />
            <UseCase6 ref={useCaseRefs.useCase6Ref} />
        </div>
    );
};

export default UseCasesContainer;

