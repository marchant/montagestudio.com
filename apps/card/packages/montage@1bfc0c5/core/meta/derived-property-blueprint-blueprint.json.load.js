montageDefine("1bfc0c5","core/meta/derived-property-blueprint-blueprint.json",{exports:{derived_property_getterDefinition:{prototype:"core/meta/property-blueprint",properties:{name:"getterDefinition",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"string",enumValues:[],helpKey:""}},derived_property_setterDefinition:{prototype:"core/meta/property-blueprint",properties:{name:"setterDefinition",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"string",enumValues:[],helpKey:""}},derived_property_blueprint_dependencies:{prototype:"core/meta/property-blueprint",properties:{name:"valueType",blueprint:{"@":"root"},cardinality:-1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"string",enumValues:[],helpKey:""}},property_blueprint_reference:{prototype:"core/meta/blueprint-reference",properties:{valueReference:{blueprintName:"PropertyBlueprint",blueprintModuleId:"core/meta/property-blueprint-blueprint.json",prototypeName:"PropertyBlueprint"}}},root:{prototype:"core/meta/blueprint",properties:{name:"DerivedPropertyBlueprint",blueprintModuleId:"core/meta/derived-property-blueprint-blueprint.json",prototypeName:"DerivedPropertyBlueprint",customPrototype:!1,parent:{"@":"property_blueprint_reference"},propertyBlueprints:[{"@":"derived_property_blueprint_dependencies"},{"@":"derived_property_getterDefinition"},{"@":"derived_property_setterDefinition"}],propertyBlueprintGroups:{"association-blueprint":[{"@":"derived_property_blueprint_dependencies"},{"@":"derived_property_getterDefinition"},{"@":"derived_property_setterDefinition"}]},propertyValidationRules:{}}}}})