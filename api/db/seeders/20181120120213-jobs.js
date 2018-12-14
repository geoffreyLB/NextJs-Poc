module.exports = {
    up: queryInterface =>
        queryInterface.bulkInsert(
            'jobs',
            [
                {
                    id: '6341d7ce-2476-5884-b239-116b99c2129b',
                    title: 'Développeur Merveilleux',
                    reference: '201846MBAO',
                    start_date: '2018-12-12',
                    end_date: '2018-12-13',
                    contract_type: 'temporaryWork',
                    description: '<p>Créer des applications qui font un travail formidable.</p>',
                    created_at: '2018-10-30 16:06:17.08127',
                    updated_at: '2018-10-30 16:06:17.08127',
                },
                {
                    id: '764bd5dc-9b77-507d-980f-c48317b62e2b',
                    title: 'Product Manager Exceptionnel',
                    reference: '201846ROTJ',
                    start_date: '2019-01-05',
                    end_date: '2019-06-01',
                    contract_type: 'permanentContract',
                    description: '<p>Ecrire des tâches complètes et intéressantes.</p>',
                    created_at: '2018-11-03 14:06:17.08127',
                    updated_at: '2018-11-05 10:06:17.08127',
                },
            ],
            {},
        ),
    down: queryInterface => queryInterface.bulkDelete('jobs', null, {}),
};
