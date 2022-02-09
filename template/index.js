const notEmpty = name => {
  return v => {
    if (!v || v.trim === '') {
      return `${name} is required`
    } else {
      return true
    }
  }
}

const toUpperCase = str => {
  str = str.toLowerCase()
  const reg = /\b(\w)|\s(\w)/g
  return str.replace(reg, function (m) {
    return m.toUpperCase()
  })
}

module.exports = {
  description: 'generate Vue3 component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'page name please',
      validate: notEmpty('name'),
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [
        {
          name: 'store',
          value: 'store',
          checked: true,
        },
        {
          name: '<template>',
          value: 'template',
          checked: true,
        },
        {
          name: '<script>',
          value: 'script',
          checked: true,
        },
        {
          name: 'style',
          value: 'style',
          checked: true,
        },
      ],
      validate(value) {
        if (
          value.indexOf('script') === -1 &&
          value.indexOf('template') === -1
        ) {
          return 'Components require at least a script or template tag.'
        }
        return true
      },
    },
  ],
  actions: data => {
    const name = data.name
    return [
      {
        type: 'add',
        path: `src/views/${name}/index.vue`,
        templateFile: 'template/component/index.hbs',
        data: {
          name: name,
          template: data.blocks.includes('template'),
          script: data.blocks.includes('script'),
          style: data.blocks.includes('style'),
        },
      },
      {
        type: 'add',
        path: `src/views/${name}/${name}.api.ts`,
        templateFile: 'template/component/api.hbs',
        data: {
          name: name,
        },
      },
      data.blocks.includes('store') && {
        type: 'add',
        path: `src/views/${name}/${name}.store.ts`,
        templateFile: 'template/component/store.hbs',
        data: {
          name: name,
          aaa: toUpperCase(name),
        },
      },
    ]
  },
}
