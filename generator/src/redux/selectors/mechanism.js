export const getMechanism = store => store.mechanism;

export const getMechanismAsObject = store => ({mechanism: store.mechanism});

export const getSpeciesNames = store => {
    return store.mechanism.gasSpecies.map(species => species.name);
};

export const getProperty = (store, speciesName) => {
    const species = getMechanism(store).gasSpecies.filter(species => {
        return species.name === speciesName;
    });
    return { properties: species.length > 0 ? species[0].properties : [] };
};

export const getReaction = (store, reactionId) => {
    const reaction = getMechanism(store).reactions.filter(reaction => {
        return reaction.id === reactionId;
    });
    return reaction[0];
};

export const getReactants = (store, reactionId) => {
    const reaction = getMechanism(store).reactions.filter(reaction => {
        return reaction.id === reactionId;
    });
    return reaction[0].data.reactants;
};

export const getProducts = (store, reactionId, schema) => {
    const reaction = getMechanism(store).reactions.filter(reaction => {
        return reaction.id === reactionId;
    });
    return reaction[0].data[schema.key];
};