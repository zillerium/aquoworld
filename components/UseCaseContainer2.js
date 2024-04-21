import React, { useRef } from 'react';
import UseCases from './UseCases';  // This holds the cards and the logic to display them
import UseCase1 from './UseCase1';
import UseCase2 from './UseCase2';
import UseCase3 from './UseCase3';
import UseCase4 from './UseCase4';
import UseCase5 from './UseCase5';
import UseCase6 from './UseCase6';

const UseCasesContainer = () => {
    const useCase1Ref = useRef(null);
    const useCase2Ref = useRef(null);
    const useCase3Ref = useRef(null);
    const useCase4Ref = useRef(null);
    const useCase5Ref = useRef(null);
    const useCase6Ref = useRef(null);

    const handleLearnMoreClick = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("Reference is null, cannot scroll");
        }
    };

    return (
        <div>
            <UseCases onLearnMoreClick={() => handleLearnMoreClick(useCase1Ref)} />
            <div>
                <UseCase1 ref={useCase1Ref} />
                <UseCase2 ref={useCase2Ref} />
                <UseCase3 ref={useCase3Ref} />
                <UseCase4 ref={useCase4Ref} />
                <UseCase5 ref={useCase5Ref} />
                <UseCase6 ref={useCase6Ref} />
            </div>
        </div>
    );
};

export default UseCasesContainer;

