package mx.gob.scjn.adm;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("mx.gob.scjn.adm");

        noClasses()
            .that()
            .resideInAnyPackage("mx.gob.scjn.adm.service..")
            .or()
            .resideInAnyPackage("mx.gob.scjn.adm.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..mx.gob.scjn.adm.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
