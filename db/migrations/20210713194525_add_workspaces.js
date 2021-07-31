const tableName = 'workspace';
const workspaces = [
  {
    description: 'Workspace #1',
  },
  {
    description: 'Workspace #2',
  },
  {
    description: 'Workspace #3',
  },
  {
    description: 'Workspace #4',
  },
  {
    description: 'Workspace #5',
  },
  {
    description: 'Workspace #6',
  },
  {
    description: 'Workspace #7',
  },
  {
    description: 'Workspace #8',
  },
  {
    description: 'Workspace #9',
  },
  {
    description: 'Workspace #10',
  },
  {
    description: 'Workspace #11',
  },
  {
    description: 'Workspace #12',
  },
  {
    description: 'Workspace #13',
  },
  {
    description: 'Workspace #14',
  },
  {
    description: 'Workspace #15',
  },
  {
    description: 'Workspace #16',
  },
  {
    description: 'Workspace #17',
  },
  {
    description: 'Workspace #18',
  },
  {
    description: 'Workspace #19',
  },
  {
    description: 'Workspace #20',
  },
  {
    description: 'Workspace #21',
  },
  {
    description: 'Workspace #22',
  },
  {
    description: 'Workspace #23',
  },
  {
    description: 'Workspace #24',
  },
  {
    description: 'Workspace #25',
  },
  {
    description: 'Workspace #26',
  },
  {
    description: 'Workspace #27',
  },
  {
    description: 'Workspace #28',
  },
  {
    description: 'Workspace #29',
  },
  {
    description: 'Workspace #30',
  },
  {
    description: 'Workspace #31',
  },
  {
    description: 'Workspace #32',
  },
  {
    description: 'Workspace #33',
  },
  {
    description: 'Workspace #34',
  },
  {
    description: 'Workspace #35',
  },
  {
    description: 'Workspace #36',
  },
  {
    description: 'Workspace #37',
  },
  {
    description: 'Workspace #38',
  },
  {
    description: 'Workspace #39',
  },
  {
    description: 'Workspace #40',
  },
  {
    description: 'Workspace #41',
  },
  {
    description: 'Workspace #42',
  },
  {
    description: 'Workspace #43',
  },
  {
    description: 'Workspace #44',
  },
  {
    description: 'Workspace #45',
  },
  {
    description: 'Workspace #46',
  },
  {
    description: 'Workspace #47',
  },
  {
    description: 'Workspace #48',
  },
  {
    description: 'Workspace #49',
  },
  {
    description: 'Workspace #50',
  },
  {
    description: 'Workspace #51',
  },
  {
    description: 'Workspace #52',
  },
  {
    description: 'Workspace #53',
  },
  {
    description: 'Workspace #54',
  },
  {
    description: 'Workspace #55',
  },
  {
    description: 'Workspace #56',
  },
  {
    description: 'Workspace #57',
  },
  {
    description: 'Workspace #58',
  },
  {
    description: 'Workspace #59',
  },
  {
    description: 'Workspace #60',
  },
  {
    description: 'Workspace #61',
  },
  {
    description: 'Workspace #62',
  },
  {
    description: 'Workspace #63',
  },
  {
    description: 'Workspace #64',
  },
  {
    description: 'Workspace #65',
  },
  {
    description: 'Workspace #66',
  },
  {
    description: 'Workspace #67',
  }
];

exports.up = (knex) => {
  return knex(tableName).insert(workspaces);
};

exports.down = async (knex) => {
  try {
    await Promise.all(
      workspaces.map(async (workspace) => {
        await knex(tableName).where('description', workspace.description).del();
      })
    );
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};
